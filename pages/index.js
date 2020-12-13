import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from './menu'
import Link from "next/link";

export default function Home() {
  return (
    <div className='main-content' >
      <Menu></Menu>
    <div className='sections' >
    <section id='intro' className='section section-main active' >
					
					<div className='container-fluid' >
						
						<div className='v-align' >
							<div className='inner' >
								<div className='intro-text' >
									
									<h1>I'm Navead Kazi</h1>
									
									<p>
										A Friend, Dude and Buddy From Earth
									</p>
									
									<div className='intro-btns' >
										
										<Link href='/about' >
											<span  className='btn-custom section-toggle' data-section='about'>Discover More</span>
										</Link>
										
										{/* <a href='#contact' className='btn-custom section-toggle' data-section='contact' >
											Hire Me
										</a> */}
										
									</div>
									
								</div>
							</div>
							
						</div>
						
					</div>
				
				</section>
        </div>
        </div>
  )
}
