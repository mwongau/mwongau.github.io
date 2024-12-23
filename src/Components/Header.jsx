function Header(props) {
  return (	  
        <div className="header">
        <h1 className="text-3xl py-2 text-teal-500">{props.name}</h1>
        <h3 className="text-xl py-2 text-teal-500">{props.sub_title}</h3>
	</div>      		
  );
}
export default Header;