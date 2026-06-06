function Header(props) {
  return (	  
        <div className="header">
        <h1>{props.name}</h1>
        <h4>{props.sub_title}</h4>
	    </div>      		
  );
}
export default Header;