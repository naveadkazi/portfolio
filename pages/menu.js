import Link from "next/link";

function Menu({isDark})
{
    const isDarkStyle = isDark ? "border-dark" : ""
    return(
        <>
        <a href='' className={'menu-btn ' + isDarkStyle} >
				<span className='lines' >
					<span className='l1' ></span>
					<span className='l2' ></span>
					<span className='l3' ></span>
				</span>
			</a>
        <div className='menu' >
				<div className='inner' >
					<ul className='menu-items' >
						
						<li>
							<Link href='/' className='section-toggle' data-section='intro' >
								Home
							</Link>
						</li>
						
						<li>
							<Link href='/about' className='section-toggle' data-section='about' >
								About
							</Link>
						</li>
						
						{/* <li>
							<a href='#resume' className='section-toggle' data-section='resume' >
								Resume
							</a>
						</li> */}
						
						{/* <li>
							<a href='#portfolio' className='section-toggle' data-section='portfolio' >
								Portfolio
							</a>
						</li> */}
						
						
						<li>
							<Link href='/contact' className='section-toggle' data-section='contact' >
								Contact
							</Link>
						</li>
						
						
					</ul>
				</div>
			</div>
			
			<div className='animation-block' ></div>
            </>
    )
}

export default Menu;