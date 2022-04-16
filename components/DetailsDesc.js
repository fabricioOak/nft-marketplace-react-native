import { View, Text } from "react-native";
import React, {useState} from "react";

import { EtherInfo, NFTTitle } from "./SubInfo";
import { COLORS, FONTS, SIZES } from "../constants";

export const DetailsDesc = ({ data }) => {
  const [descriptionText, setDescriptionText] = useState(data.description.slice(0, 100));
  const [showMore, setShowMore] = useState(false);

  const showDescriptionText = () => {
    if (!showMore) {
      setDescriptionText(data.description);
      setShowMore(true);
    }
    else {
      setDescriptionText(data.description.slice(0, 100));
      setShowMore(false);
    }
  }

	return (
		<>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<NFTTitle title={data.name} subTitle={data.creator} />
				<EtherInfo price={data.price} />
			</View>
			<View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
				<Text
					style={{
						fontSize: SIZES.font,
						fontFamily: FONTS.semiBold,
						color: COLORS.primary,
					}}
				>
					Description
				</Text>
        <View style={{marginTop: SIZES.base}}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            textAlign: "justify",
            lineHeight: SIZES.large,
          }}>{descriptionText}
          {!showMore && '...'}
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }} onPress={() => {showDescriptionText()}}>
            {showMore ? ' Show Less' : ' Read More'}
          </Text>
          </Text>
        </View>
			</View>
		</>
	);
};
