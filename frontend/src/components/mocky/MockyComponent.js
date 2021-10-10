import CardComponent from "../core/card/Card";

const MockyComponent = () => {
  return (
    <>
      <CardComponent
        title={"Mocky"}
        subtitle={"Build the request you need!"}
        text={"This test works"}
        body={<p>Body</p>}
      />
    </>
  );
};

export default MockyComponent;
