function Header(props) {
  return (	  
        <div className="Header">
        <h1>{props.name}</h1>
        <h3>{props.sub_title}</h3>
	    </div>      		
  );
}
export default Header;