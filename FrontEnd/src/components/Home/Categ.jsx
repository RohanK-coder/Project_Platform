import { motion } from 'framer-motion';
export default function Categ() {
  return (
    <>
      <h1 className="heading-community">Sectors</h1>
      <section className="Categs">
        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.4,
            },
          }}
        >
          <svg width="90" height="90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g data-name="47-Online Education"><path d="M43 48h-5v-2h5a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v38a3 3 0 0 0 3 3h5v2H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h38a5.006 5.006 0 0 1 5 5v38a5.006 5.006 0 0 1-5 5z"/><path d="M4 8h40v2H4zM5 4h2v2H5zM9 4h2v2H9zM41 4h2v2h-2zM23 29h2v7h-2z"/><path d="M24 30a1 1 0 0 1-.388-.078l-19-8a1 1 0 0 1 0-1.844l19-8a1.013 1.013 0 0 1 .776 0l19 8a1 1 0 0 1 0 1.844l-19 8A1 1 0 0 1 24 30zM7.577 21 24 27.915 40.423 21 24 14.085z"/><path d="M24 46a.99.99 0 0 1-.419-.092l-13-6A1 1 0 0 1 10 39V23h2v15.36l12 5.54 12-5.54V23h2v16a1 1 0 0 1-.581.908l-13 6A.99.99 0 0 1 24 46zM42 35h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2v-6h2v12a1 1 0 0 1-.293.707l-1 1A1 1 0 0 1 42 35zm-1-2h.586l.414-.414V29h-1zM22 20h4v2h-4z"/></g>
            
          </svg>
          <div className="card__content">
            <p className="card__title">Education</p>
            
          </div>
        </motion.section>
        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.4,
            },
          }}
        >
          
            
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" id="transportation"><rect width="44" height="4" x="9.99" y="16" fill="#010101"></rect><path fill="#010101" d="M50.83,0H13.15A5.17,5.17,0,0,0,8,5.16V49.84A5.17,5.17,0,0,0,13.15,55H50.83A5.17,5.17,0,0,0,56,49.84V5.16A5.17,5.17,0,0,0,50.83,0ZM52,49.84A1.16,1.16,0,0,1,50.83,51H13.15A1.16,1.16,0,0,1,12,49.84V5.16A1.16,1.16,0,0,1,13.15,4H50.83A1.16,1.16,0,0,1,52,5.16Z"></path><rect width="16" height="4" x="23.99" y="8" fill="#010101"></rect><rect width="44" height="4" x="9.99" y="36" fill="#010101"></rect><polygon fill="#010101" points="20.36 54.46 19.82 55 10.81 64 5.17 64 14.16 55 17.54 51.63 20.36 54.46"></polygon><polygon fill="#010101" points="58.83 64 53.15 64 44.1 55 43.56 54.46 46.38 51.62 49.78 55 58.83 64"></polygon><path fill="#010101" d="M46.18 48h-.37A1.81 1.81 0 0 1 44 46.19v-.37A1.81 1.81 0 0 1 45.81 44h.37A1.81 1.81 0 0 1 48 45.82v.37A1.81 1.81 0 0 1 46.18 48zM18.18 48h-.37A1.81 1.81 0 0 1 16 46.19v-.37A1.81 1.81 0 0 1 17.81 44h.37A1.81 1.81 0 0 1 20 45.82v.37A1.81 1.81 0 0 1 18.18 48z"></path></svg>
          <div className="card__content">
            <p className="card__title">Transportation</p>
            
          </div>
        </motion.section>
        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.4,
            },
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 576 512"><path d="M275.5 6.6C278.3 2.5 283 0 288 0s9.7 2.5 12.5 6.6L366.8 103C378 119.3 384 138.6 384 158.3V160c0 53-43 96-96 96s-96-43-96-96v-1.7c0-19.8 6-39 17.2-55.3L275.5 6.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
          <div className="card__content">
            <p className="card__title">Sanitation</p>
            
          </div>
        </motion.section>
        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.4,
            },
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 640 512"><path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg>
            
          
          <div className="card__content">
            <p className="card__title">Connectivity</p>
            
          </div>
        </motion.section>
        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.4,
            },
          }}
        >
          
            
          <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 640 512"><path d="M122.2 0C91.7 0 65.5 21.5 59.5 51.4L8.3 307.4C.4 347 30.6 384 71 384H288v64H224c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V384H569c40.4 0 70.7-36.9 62.8-76.6l-51.2-256C574.5 21.5 548.3 0 517.8 0H122.2zM260.9 64H379.1l10.4 104h-139L260.9 64zM202.3 168H101.4L122.2 64h90.4L202.3 168zM91.8 216H197.5L187.1 320H71L91.8 216zm153.9 0H394.3l10.4 104-169.4 0 10.4-104zm196.8 0H548.2L569 320h-116L442.5 216zm96-48H437.7L427.3 64h90.4l31.4-6.3L517.8 64l20.8 104z"/></svg>
          <div className="card__content">
            <p className="card__title">Energy</p>
            
          </div>
        </motion.section>
        
        
        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.6,
            },
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="80" viewBox="0 0 640 512"><path d="M96 64c0-35.3 28.7-64 64-64H266.3c26.2 0 49.7 15.9 59.4 40.2L373.7 160H480V126.2c0-24.8 5.8-49.3 16.9-71.6l2.5-5c7.9-15.8 27.1-22.2 42.9-14.3s22.2 27.1 14.3 42.9l-2.5 5c-6.7 13.3-10.1 28-10.1 42.9V160h56c22.1 0 40 17.9 40 40v45.4c0 16.5-8.5 31.9-22.6 40.7l-43.3 27.1c-14.2-5.9-29.8-9.2-46.1-9.2c-39.3 0-74.1 18.9-96 48H352c0 17.7-14.3 32-32 32h-8.2c-1.7 4.8-3.7 9.5-5.8 14.1l5.8 5.8c12.5 12.5 12.5 32.8 0 45.3l-22.6 22.6c-12.5 12.5-32.8 12.5-45.3 0l-5.8-5.8c-4.6 2.2-9.3 4.1-14.1 5.8V480c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32v-8.2c-4.8-1.7-9.5-3.7-14.1-5.8l-5.8 5.8c-12.5 12.5-32.8 12.5-45.3 0L40.2 449.1c-12.5-12.5-12.5-32.8 0-45.3l5.8-5.8c-2.2-4.6-4.1-9.3-5.8-14.1H32c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h8.2c1.7-4.8 3.7-9.5 5.8-14.1l-5.8-5.8c-12.5-12.5-12.5-32.8 0-45.3l22.6-22.6c9-9 21.9-11.5 33.1-7.6V192 160 64zm170.3 0H160v96h32H304.7L266.3 64zM176 256a80 80 0 1 0 0 160 80 80 0 1 0 0-160zM528 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0 64c-48.6 0-88-39.4-88-88c0-29.8 14.8-56.1 37.4-72c14.3-10.1 31.8-16 50.6-16c2.7 0 5.3 .1 7.9 .3c44.9 4 80.1 41.7 80.1 87.7c0 48.6-39.4 88-88 88z"/></svg>
          <div className="card__content">
            <p className="card__title">Agriculture</p>
            
          </div>
        </motion.section>

        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.8,
            },
          }}
        >
          <svg width="80"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 11V22M4 22V11M14 22V17C14 16.4477 13.5523 16 13 16H11C10.4477 16 10 16.4477 10 17V22M9 4.5V2.1C9 2.04477 8.95523 2 8.9 2H6.1C6.04477 2 6 2.04477 6 2.1V7M1 22H23M2.2606 11H21.7394C21.8311 11 21.8744 10.887 21.8063 10.8257L12.669 2.60207C12.2887 2.25979 11.7113 2.25979 11.331 2.60207L2.1937 10.8257C2.12558 10.887 2.16895 11 2.2606 11Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>

          <div className="card__content">
            <p className="card__title">Household</p>
            
          </div>
        </motion.section>

        <motion.section
          id="card1"
          className={'Category'}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 1,
            },
          }}
        >
          <svg width="80"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 22L1.25192 18.6279C1.08766 18.3815 1 18.092 1 17.7958V13.25C1 12.5596 1.55964 12 2.25 12C2.94036 12 3.5 12.5596 3.5 13.25V16.0211C3.5 16.1162 3.52712 16.2093 3.57817 16.2895L3.79872 16.6361M5.44444 19.2222L3.79872 16.6361M8.22222 21.9999V19.4235C8.22222 18.93 8.07612 18.4474 7.80234 18.0368L6.79337 16.5233C6.34922 15.8571 5.46013 15.6572 4.77355 16.0691L3.79872 16.6361M20.7223 22L22.782 18.6088C22.9246 18.3741 23 18.1048 23 17.8301V13.2499C23 12.5596 22.4404 12 21.7501 12C21.0598 12 20.5001 12.5596 20.5001 13.2499V16.0211C20.5001 16.1162 20.473 16.2093 20.422 16.2895L20.4166 16.298M18.5557 19.2222L20.4166 16.298M16 22V19.0903C16 18.5967 16.1461 18.1142 16.4199 17.7035L17.4289 16.1901C17.873 15.5238 18.7621 15.3239 19.4487 15.7359L20.4166 16.298M12.9999 2C13.5521 2 13.9999 2.44772 13.9999 3V5.90014C13.9999 5.95536 14.0446 6.00013 14.0999 6.00013L17 6.00014C17.5523 6.00014 18 6.44785 18 7.00014V9.00013C18 9.55242 17.5523 10.0001 17 10.0001H14.0999C14.0446 10.0001 13.9999 10.0449 13.9999 10.1001V13C13.9999 13.5523 13.5521 14 12.9999 14H10.9999C10.4476 14 9.99985 13.5523 9.99985 13V10.1001C9.99985 10.0449 9.95508 10.0001 9.89985 10.0001H7.00005C6.44776 10.0001 6.00005 9.55242 6.00005 9.00013V7.00013C6.00005 6.44785 6.44776 6.00013 7.00005 6.00013L9.89985 6.00013C9.95508 6.00013 9.99985 5.95536 9.99985 5.90014V3C9.99985 2.44771 10.4476 2 10.9999 2H12.9999Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
</svg>

          <div className="card__content">
            <p className="card__title">Healthcare</p>
            
          </div>
        </motion.section>
      </section>
    </>
  );
}
