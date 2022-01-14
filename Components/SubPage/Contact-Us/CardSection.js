import ContactusCard from "./ContactUsCard";
const CardSection = () => {
    return (
      <div className="flex justify-center gap-6 flex-wrap my-7">
        <ContactusCard
          title={"Office Location"}
          subTitle={"200 Vesey street, New York , NY 10281"}
          isInverted={false}
          iconLoc={"Assets/contactuspage/location.svg"}
        />
        <ContactusCard
          title={"Our Contact"}
          subTitle={"info@algosolver.com"}
          isInverted={true}
          iconLoc={"Assets/contactuspage/message.svg"}
        />
        <ContactusCard
          title={"Office Phone"}
          subTitle={"+1-347-849-7449"}
          isInverted={false}
          iconLoc={"Assets/contactuspage/phone.svg"}
        />
      </div>
    );
}
export default CardSection;