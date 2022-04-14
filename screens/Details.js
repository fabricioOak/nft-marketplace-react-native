import {
	View,
	Text,
	SafeAreaView,
	StatusBar,
	Image,
	FlatList,
} from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
	CircleButton,
	RectangularButton,
	SubInfo,
	FocusedStatusBar,
	DetailsDesc,
	DetailsBid,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
	<View
		style={{
			width: "100%",
			height: 373,
		}}
	>
		<Image
			source={data.image}
			resizeMode="cover"
			style={{
				width: "100%",
				height: "100%",
			}}
		/>

    <CircleButton left={15} top={StatusBar.currentHeight + 10} imgUrl={assets.left} handlePress={() => navigation.goBack()}/>
    <CircleButton right={15} top={StatusBar.currentHeight + 10} imgUrl={assets.heart}/>
	</View>
);
const Details = ({ route, navigation }) => {
	const { data } = route.params;

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent={true}
			/>
			<View
				style={{
					width: "100%",
					position: "absolute",
					bottom: 0,
					paddingVertical: SIZES.font,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#ffffff80",
					zIndex: 1,
				}}
			>
				<RectangularButton
					minWidth={170}
					fontSize={SIZES.large}
					{...SHADOWS.dark}
				/>
			</View>
			<FlatList
				data={data.bids}
				renderItem={({ item }) => <DetailsBid bid={item} />}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: SIZES.extraLarge * 3,
				}}
				ListHeaderComponent={() => (
					<>
						<DetailsHeader data={data} navigation={navigation} />
					</>
				)}
			/>
		</SafeAreaView>
	);
};

export default Details;
