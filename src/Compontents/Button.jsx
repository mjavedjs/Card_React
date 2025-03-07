    const Button = (props) => {
        return (
            <button
            style={{
            padding: "8px 16px",
            backgroundColor:props.bg ? props.bg :'green',
          color: "white",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s",}} onClick={props.onClick} >
        {props.title}
      </button>
    );
  };
  
  export default Button;
  