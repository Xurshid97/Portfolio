import './Contacts.scss'

function Contacts({children}) {
  return (
    <div className='contacts'>
        <div className="contacts_head">
            {children}
        </div>
        <div className="contacts_body">
            <div className="contacts_body_left">
            I’m interested in to built something useful for everyone. 
            It doesn't matter small or big, for me the value I gave is really important.
            </div>
            <div className="contacts_body_right">
                <h5>Message me here</h5>
                <div className="social">
                    <a href="https://t.me/greenstep1">
                        <i className="fa fa-telegram"></i>
                        <h6>@greenstep1</h6>
                    </a>
                </div>
                <div className="social">
                    <a href="mailto:khurshidjon.sharopov@gmail.com">
                        <i className="fa fa-envelope"></i>
                        <h6>khurshidjon.sharopov</h6>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts