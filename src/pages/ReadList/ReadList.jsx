import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReadList = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read</h2>
        </TabPanel>
        <TabPanel>
          <h2>My wishlist </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
