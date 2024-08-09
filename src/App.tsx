import React, { useState } from "react";
import Modal from "react-modal";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as BarChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip as BarTooltip,
  Legend as BarLegend,
  ChartOptions as BarChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { UploadInput } from "./components/UploadInput";
import utf8 from "utf8"; // Import the utf8 package
import "./styles.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
BarChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  BarTooltip,
  BarLegend
);

// Define interfaces
interface Message {
  sender_name: string;
  content: string;
  timestamp_ms?: number;
}

interface UserMessages {
  [user: string]: Message[];
}

// Decode Unicode function
const decodeUnicode = (unicodeString: string): string => {
  try {
    return decodeURIComponent(
      unicodeString.replace(/\\u([0-9a-fA-F]{4})/g, "%u$1")
    );
  } catch (error) {
    console.error("Error decoding Unicode string:", unicodeString, error);
    return unicodeString; // Return the original string if decoding fails
  }
};

// Format timestamp function
const formatTimestamp = (timestamp_ms: number): string => {
  const date = new Date(timestamp_ms);
  return date.toLocaleString(); // Adjust format as needed
};

// Filter messages function
const filterMessages = (messages: Message[]): Message[] => {
  return messages
    .map((msg) => ({
      ...msg,
      content: msg.content.trim(),
    }))
    .filter(
      (msg) =>
        msg.content &&
        !msg.content.toLowerCase().includes("liked a message") &&
        !msg.content.toLowerCase().includes("attachment") &&
        !msg.content.toLowerCase().includes("like") &&
        !/[^\u0000-\u007F]/.test(msg.content) // Check for non-ASCII characters (emojis)
    );
};

// Get top messages function
const getTopMessages = (
  messages: Message[]
): { labels: string[]; datasets: any[] } => {
  const filteredMessages = filterMessages(messages);
  const messageCounts: { [message: string]: number } = {};

  filteredMessages.forEach((msg) => {
    messageCounts[msg.content] = (messageCounts[msg.content] || 0) + 1;
  });

  const sortedMessages = Object.entries(messageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7);

  return {
    labels: sortedMessages.map(([message]) => message),
    datasets: [
      {
        label: "Message Frequency",
        data: sortedMessages.map(([, count]) => count),
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#00a8b5",
          "#ff9f40",
          "#4bc0c0",
        ],
        borderColor: "#000000",
        borderWidth: 1,
      },
    ],
  };
};

// Get sorted messages ascending function
const getSortedMessagesAscending = (messages: Message[]): Message[] => {
  return messages
    .filter((msg) => msg.timestamp_ms) // Filter out messages without a timestamp
    .sort((a, b) => a.timestamp_ms! - b.timestamp_ms!); // Sort by ascending timestamp
};

// Get latest messages function
const getLatestMessages = (messages: Message[], count: number): Message[] => {
  const sortedMessages = getSortedMessagesAscending(messages);
  return sortedMessages.slice(-count); // Get latest messages (most recent)
};

// Get earliest messages function
const getEarliestMessages = (messages: Message[], count: number): Message[] => {
  const sortedMessages = getSortedMessagesAscending(messages);
  return sortedMessages.slice(0, count); // Get earliest messages (oldest)
};

// MessageList component
const MessageList: React.FC<{ messages: Message[]; title: string }> = ({
  messages,
  title,
}) => (
  <div className="message-list">
    <h2>{title}</h2>
    <div className="message-container">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`message-wrapper ${
              msg.sender_name === "You" ? "you" : "other"
            }`}
          >
            <div
              className={`message-bubble ${
                msg.sender_name === "You" ? "you" : "other"
              }`}
            >
              <strong>{msg.sender_name}</strong>
              <div>{msg.content}</div>
            </div>
            <small className="timestamp">
              {formatTimestamp(msg.timestamp_ms!)}
            </small>
          </div>
        ))
      ) : (
        <div>No messages to display</div>
      )}
    </div>
  </div>
);

// Main App component
const App: React.FC = () => {
  const [data, setData] = useState<UserMessages | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          const messages = json.messages as Message[];
          const userMessages: UserMessages = {};

          messages.forEach((msg) => {
            // Check if content and sender_name are defined and are strings
            const content = msg.content || "";
            const senderName = msg.sender_name || "";

            try {
              const decodedContent = utf8.decode(content);
              const decodedSenderName = utf8.decode(senderName);

              if (!userMessages[decodedSenderName]) {
                userMessages[decodedSenderName] = [];
              }

              userMessages[decodedSenderName].push({
                ...msg,
                content: decodedContent,
                sender_name: decodedSenderName,
              });
            } catch (decodeError) {
              console.error(
                "Error decoding message or sender name:",
                decodeError
              );
            }
          });

          setData(userMessages);
        } catch (error) {
          console.error("Error parsing JSON file:", error);
        }
      };

      reader.readAsText(file);
    }
  };

  const getChartData = () => {
    if (!data) return { labels: [], datasets: [] };

    const userLabels = Object.keys(data);
    const messageCounts = userLabels.map((user) => ({
      user,
      count: data[user].length,
    }));

    // Sort users by message count in descending order and take the top 7
    const topUsers = messageCounts
      .sort((a, b) => b.count - a.count)
      .slice(0, 7);

    return {
      labels: topUsers.map((user) => user.user),
      datasets: [
        {
          label: "Number of Messages",
          data: topUsers.map((user) => user.count),
          backgroundColor: [
            "#ff6384",
            "#36a2eb",
            "#cc65fe",
            "#ffce56",
            "#00a8b5",
            "#ff9f40",
            "#4bc0c0",
          ],
          borderColor: "#000000",
          borderWidth: 1,
        },
      ],
    };
  };

  const chartOptions: ChartOptions<"pie"> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => ` ${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
      datalabels: {
        color: "#ffffff", // Color of the labels
        formatter: (value) => `${value}`, // Only show the value
        anchor: "end", // Position inside the arc
        align: "start",
        offset: 10, // Adjust the offset as needed
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: "#000000", // Consistent border color
        hoverOffset: 20, // Increased offset for a larger pop-up effect
      },
    },
  };

  const barChartOptions: BarChartOptions<"bar"> = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "y", // Horizontal bar chart
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => ` ${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        borderColor: "#000000", // Consistent border color
        backgroundColor: "#ff6384",
      },
    },
  };

  const allMessages = data
    ? Object.values(data)
        .flat()
        .map((msg) => ({
          ...msg,
          content: decodeUnicode(msg.content),
        }))
    : [];

  const latestMessages = getLatestMessages(allMessages, 6);
  const earliestMessages = getEarliestMessages(allMessages, 6);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#141414",
        color: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#00ff99" }}>Instagram Chat Analyzer</h1>
      <button
        onClick={openModal}
        style={{
          backgroundColor: "#00ff99",
          color: "#141414",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        How to Use
      </button>
      <UploadInput onFileUpload={handleFileUpload} />
      {data && (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            maxWidth: "100%",
            overflowX: "auto",
          }}
        >
          <div style={{ width: "100%", maxWidth: "600px", flexShrink: 0 }}>
            <h2>Message Count by User</h2>
            <div style={{ position: "relative", height: "400px" }}>
              <Pie data={getChartData()} options={chartOptions} />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              flexShrink: 0,
              marginLeft: "20px",
            }}
          >
            <h2>Top 7 Most Used Messages</h2>
            <div style={{ position: "relative", height: "400px" }}>
              <Bar
                data={getTopMessages(allMessages)}
                options={barChartOptions}
              />
            </div>
          </div>
        </div>
      )}
      {data && (
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
        >
          <div style={{ width: "100%", maxWidth: "600px", flexShrink: 0 }}>
            <MessageList messages={latestMessages} title="Latest 6 Messages" />
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              flexShrink: 0,
              marginLeft: "20px",
            }}
          >
            <MessageList
              messages={earliestMessages}
              title="Earliest 6 Messages"
            />
          </div>
        </div>
      )}
      {/* Modal for How to Use */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            backgroundColor: "#1e1e1e",
            color: "#f0f0f0",
            borderRadius: "10px",
            padding: "20px",
            maxWidth: "600px",
            margin: "auto",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}
      >
        <h2>How to Export Instagram Chats</h2>
        <p>
          To export your Instagram chats in JSON format, follow these steps:
        </p>
        <ol>
          <li>Open the Instagram app on your phone.</li>
          <li>Head to the menu on your profile and click "Your activity".</li>
          <li>Scroll to the bottom and click "Download Your Information".</li>
          <li>Click "Request a download".</li>
          <li>Click "Select types of information".</li>
          <li>Tick "Messages" and click "Next".</li>
          <li>Under "Format", select "JSON".</li>
          <li>Change the "Media Quality" to Low.</li>
          <li>Click "Submit Request".</li>
          <li>
            You will receive an email confirming your request, with a link to
            your Downloads page.
          </li>
          <li>
            Meta will take a while to gather your information, so now is the
            time to get a spot of lunch or call your mum.
          </li>
          <li>
            Once complete, you'll receive an email saying your download is
            ready; click the link in this email.
          </li>
          <li>
            Click "Download" on this page; this will download a .zip folder to
            your device.
          </li>
          <li>Extract the contents.</li>
          <li>
            Go to{" "}
            <a href="https://chatcharts.co.uk/">https://chatcharts.co.uk/</a>.
          </li>
          <li>Click the merger button below.</li>
          <li>
            On your device, find the folder from the extracted file with your
            fellow chatter's name on it. Open this folder and select all the
            JSON files; upload it.
          </li>
          <li>It will give you one single JSON file; download it.</li>
          <li>
            Then click on the "Upload JSON" button and upload the newly
            downloaded JSON file.
          </li>
          <li>Congrats, you've done it! 😁</li>
        </ol>
        <button
          onClick={closeModal}
          style={{
            backgroundColor: "#ff6384",
            color: "#ffffff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default App;
