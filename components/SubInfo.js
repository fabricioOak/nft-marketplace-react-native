import { View, Text, Image } from "react-native";
import { SIZES, COLORS, FONTS, SHADOWS, assets } from "../constants";

export const NFTTitle = ({ title, subTitle }) => {
	return (
		<View>
			<Text
				style={{
					fontSize: SIZES.large,
					fontFamily: FONTS.semiBold,
					color: COLORS.primary,
				}}
			>
				{title}
			</Text>
			<Text
				style={{
					fontSize: SIZES.small,
					fontFamily: FONTS.regular,
					color: COLORS.secondary,
				}}
			>
				{subTitle}
			</Text>
		</View>
	);
};

export const EtherInfo = ({ price }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			<Image
				source={assets.eth}
				resizeMode="contain"
				style={{ width: 20, height: 20, marginRight: 2 }}
			/>
			<Text
				style={{
					fontSize: SIZES.font,
					fontFamily: FONTS.medium,
					color: COLORS.primary,
				}}
			>
				{price}
			</Text>
		</View>
	);
};

export const ImageCmp = ({ imgUrl, index }) => {
	return (
		<Image
			source={imgUrl}
			style={{
				width: 48,
				height: 48,
				marginLeft: index === 0 ? 0 : -SIZES.font,
			}}
			resizeMode="contain"
		/>
	);
};

export const Person = () => {
	return (
		<View style={{ flexDirection: "row" }}>
			{[assets.person01, assets.person02, assets.person03].map(
				(item, index) => (
					<ImageCmp imgUrl={item} index={index} key={index} />
				)
			)}
		</View>
	);
};

export const EndDate = () => {
	return (
		<View
			style={{
				paddingHorizontal: SIZES.font,
				paddingVertical: SIZES.base,
				backgroundColor: COLORS.white,
				justifyContent: "center",
				alignItems: "center",
				elevation: 2,
				maxWidth: "50%",
				...SHADOWS.light,
			}}
		>
			<Text
				style={{
					fontFamily: FONTS.regular,
					fontSize: SIZES.small,
					color: COLORS.primary,
				}}
			>
				Ending in
			</Text>

			<Text
				style={{
					fontFamily: FONTS.semiBold,
					fontSize: SIZES.medium,
					color: COLORS.primary,
				}}
			>
				12:30h
			</Text>
		</View>
	);
};

export const SubInfo = () => {
	return (
		<View
			style={{
				width: "100%",
				paddingHorizontal: SIZES.font,
				marginTop: -SIZES.extraLarge,
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<Person />
			<EndDate />
		</View>
	);
};
