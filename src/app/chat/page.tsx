"use client";

import PageLayout from "../(landing)/layout";
import Sidebar from "./components/Sidebar/Sidebar";

const ChatPage = () => {
	return (
		<PageLayout withoutPadding>
			<Sidebar />
		</PageLayout>
	);
};

export default ChatPage;
