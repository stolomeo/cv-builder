import { Box, Typography } from "@mui/material";
import { flexSpaceBtwnPx3, print12px } from "../../../../styles";
import { EducationItemsType } from "../../../../types";

type Props = {
  educationItem: EducationItemsType;
};

export default function EducationItems({ educationItem }: Props) {
  const { majorAndDegree, schoolName, schoolLocation, graduationDate } =
    educationItem;
  return (
    <>
      <Box sx={flexSpaceBtwnPx3}>
        <Typography fontWeight={700} fontSize=".6rem" sx={print12px}>
          {majorAndDegree}
        </Typography>
        <Typography fontWeight={700} fontSize=".6rem" sx={print12px}>
          {graduationDate}
        </Typography>
      </Box>
      <Box sx={flexSpaceBtwnPx3}>
        <Typography fontStyle={"italic"} fontSize=".5em" sx={print12px}>
          {schoolName}
        </Typography>
        <Typography fontStyle={"italic"} fontSize=".5em" sx={print12px}>
          {schoolLocation}
        </Typography>
      </Box>
    </>
  );
}