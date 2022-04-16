import React, { useState } from "react";
import { View, FlatList, SafeAreaView } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, FocusedStatusBar, HomeHeader } from "../components";

const Home = () => {
	const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar backgroundColor={COLORS.primary} />
			<View style={{ flex: 1 }}>
				<View style={{ zIndex: 0 }}>
					<FlatList
						data={nftData}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => <NFTCard data={item} />}
						ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
					/>
				</View>
				<View
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: -1,
					}}
				>
					<View style={{ height: 300, backgroundColor: COLORS.primary }} />
					<View style={{ flex: 1, backgroundColor: COLORS.white }} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
