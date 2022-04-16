import { View, Text, Image } from "react-native";
import React from "react";

import { EtherInfo } from "./SubInfo";
import { COLORS, FONTS, SIZES } from "../constants";

export const DetailsBid = ({ bid }) => {
	return (
		<View
			style={{
				width: "100%",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				paddingHorizontal: SIZES.font,
				marginVertical: SIZES.base,
			}}
		>
			<Image
				source={bid.image}
				resizeMode="contain"
				style={{
					width: 48,
					height: 48,
				}}
			/>

			<View>
				<Text
					style={{
						fontFamily: FONTS.semiBold,
						fontSize: SIZES.small,
						color: COLORS.primary,
					}}
				>
					Bid placed by: {bid.name}
				</Text>
				<Text
					style={{
						fontFamily: FONTS.regular,
						fontSize: SIZES.small - 2,
						color: COLORS.secondary,
						marginTop: 4,
					}}
				>
					Bid placed by: {bid.date}
				</Text>
			</View>
			<EtherInfo price={bid.price} />
		</View>
	);
};
