import { useState, useEffect } from "react";

// We installed earlier. This will render content data fetched from the Notion.
import { NotionRenderer } from "react-notion";

// For styling markdown content
import "react-notion/src/styles.css";
import LayoutDetailPage from "../../layouts/LayoutDetailPage";

function Privacy() {
  const [data, setData] = useState({});

  useEffect(() => {
    // notion-api-worker
    fetch("https://notion-api.splitbee.io/v1/page/e9bc8c9f913a42359a50777a86d6880d")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <LayoutDetailPage>
      {/* Mount NotionRenderer and pass in data to render */}
      <NotionRenderer blockMap={data} fullPage={true} />
    </LayoutDetailPage>
  );
}

export default Privacy;
