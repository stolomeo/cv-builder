import { Items, ItemList, Item } from "../styles";
import { ResumeEducationItems } from "../../../types/";

type Props = {
  educationItem: ResumeEducationItems;
};

export default function EducationItems({ educationItem }: Props) {
  const { university, schoolCity, schoolState, degree, major, graduationDate } =
    educationItem;
  return (
    <Items>
      <ItemList>
        <Item fontWeight="bold">{university}</Item>
        <Item fontWeight="bold">{graduationDate}</Item>
      </ItemList>
      <ItemList fontStyle="italic">
        <Item>
          {degree}, {major}
        </Item>
        <Item>
          {schoolCity}, {schoolState}
        </Item>
      </ItemList>
    </Items>
  );
}