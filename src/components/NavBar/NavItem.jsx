function NavItem(props) {
  return (
    <div className="navitem">
        <a href={props.link}>
            <svg fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                <path d={props.d}></path>
            </svg>
        </a>
    </div>
  );
}

export default NavItem;
