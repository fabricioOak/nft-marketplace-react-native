import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
	return (
		<View
			style={{
				backgroundColor: COLORS.primary,
				padding: SIZES.font,
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Image
					source={assets.logo}
					resizeMode="contain"
					style={{ width: 90, height: 25 }}
				/>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Text
						style={{
							color: COLORS.white,
							fontSize: SIZES.medium,
							fontFamily: FONTS.bold,
							marginRight: SIZES.font,
						}}
					>
						Diana Glasc
					</Text>
					<View style={{ width: 45, height: 45 }}>
						<Image
							resizeMode="contain"
							style={{ width: "100%", height: "100%" }}
							source={assets.person04}
						/>
						<Image
							resizeMode="contain"
							style={{
								position: "absolute",
								width: 15,
								height: 15,
								right: 0,
								bottom: 0,
							}}
							source={assets.badge}
						/>
					</View>
				</View>
			</View>

			<View style={{ marginTop: SIZES.font }}>
				<View
					style={{
						flexDirection: "row",
						width: "100%",
						borderRadius: SIZES.font,
						backgroundColor: COLORS.gray,
						alignItems: "center",
						paddingHorizontal: SIZES.font,
						paddingVertical: SIZES.small / 2,
					}}
				>
					<TextInput
						onChangeText={onSearch}
						placeholderTextColor={COLORS.white}
						style={{ flex: 1, color: COLORS.white }}
						placeholder="Search"
					/>
					<Image
						source={assets.search}
						resizeMode="contain"
						style={{ height: 20, width: 20, marginRight: SIZES.base }}
					/>
				</View>
			</View>
		</View>
	);
};

export default HomeHeader;
