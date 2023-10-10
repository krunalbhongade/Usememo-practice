import react from "react";

function Calc(props) {
  return (
    <div className="row">
      <b>
        {props.val1} + {props.val2} = {Number(props.val1) + Number(props.val2)}
        {/* {props.val1} - {props.val2} = {Number(props.val1) - Number(props.val2)} */}
      </b>
    </div>
  );
}

export default Calc;
