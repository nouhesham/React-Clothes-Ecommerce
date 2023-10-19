const Names = ({ Name, age, gender, id, married }) => {
  return (
    <div>
      <ul>
        <li>name:{Name}</li>
        <li>age:{age}</li>
        <li>gender:{gender}</li>
        <li>id:{id}</li>
        {married ? <li>married:{married}</li> : null}
      </ul>
    </div>
  );
};

export default Names;
