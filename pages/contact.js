import Menu from './menu'
function Contact() {
    return (
        <>
        
        <Menu isDark></Menu>
        <section id='contact' class='section contact-section border-d' >
            <div class='section-block contact-block' >
                <div class='container-fluid' >
                    <div class='section-header' >
                        <h2>Contact <strong class='color' >Me</strong></h2>
                    </div>
                    <div class='row' >
                    
                        {/* <div class='col-md-8' >
                            
                            <div class='contact-form' >
                            
                                <form id='contact-form' data-toggle='validator' method='post' action='mail.php' >
                                
                                    <div id='contact-form-result' ></div>
                                
                                    <div class='row' >
                                        
                                        <div class='col-md-6' >
                                            <div class='form-group' >
                                                
                                                <input type='text' class='form-control' placeholder='Name' name='name' required>
                                                <div class='help-block with-errors' ></div>
                                                
                                            </div>												
                                        </div>
                                        
                                        <div class='col-md-6' >
                                            <div class='form-group' >
                                                
                                                <input type='email' class='form-control' placeholder='Email' name='email' required>
                                                <div class='help-block with-errors' ></div>
                                            
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                    <div class='form-group' >
                                        
                                        <input type='text' class='form-control' placeholder='Subject' name='subject' required>
                                        <div class='help-block with-errors' ></div>
                                    
                                    </div>
                                    
                                    <div class='form-group' >
                                        
                                        <textarea class='form-control' placeholder='Message' name='message' rows='5' required></textarea>
                                        <div class='help-block with-errors' ></div>
                                        
                                    </div>
                                    
                                    <div class='form-group text-center' >
                                        <button type='submit' class='btn-custom btn-color' >
                                            Send Message
                                        </button>
                                    </div>
                                    
                                </form>
                                
                            </div>
                            
                            
                        </div> */}
                        
                        <div class='col-md-4' > 
                            <div class='contact-info-icons' >
                            { /*<div class='contact-info' >
                                    
                                    <i class='ion-ios-location-outline' ></i>
                                    
                                    <p>
                                        201, 2nd floor <br/> Alice Haven CHS <br /> K Villa <br />
                                        Thane 400601
                                    </p>
                                </div>
                                <div class='contact-info' >
                                    <i class='ion-ios-telephone-outline' ></i>
                                    <p>
                                        (+91) 9972305981<br />
                                        (+91) 9920964680
                                    </p>
                                </div> */ }
                                <div class='contact-info' >
                                    
                                    <i class='ion-android-globe' ></i>
                                    
                                    <p>
                                        https://github.com/naveadkazi
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;
