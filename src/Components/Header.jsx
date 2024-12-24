function Header(props) {
  return (	  
        <div className="bg-sky-100">
        <h1 className="text-3xl py-2 text-purple-800">{props.name}</h1>
        <h3 className="text-xl py-2 text-purple-800">{props.sub_title}</h3>
	</div>      		
  );
}
export default Header;