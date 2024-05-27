import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] glassmorphism p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          name="contact" action="/contact" method="post"
          className="mt-10 flex flex-col gap-6 font-poppins">
          <input type="hidden" name="form-name" value="contact" />
          <label className="flex flex-col">
          <span className="text-timberWolf font-medium mb-4">Your Name</span>
          <input required
            type="text"
            name="name"
            placeholder="Please enter your name?"
            className="bg-eerieBlack py-4 px-6
            placeholder:text-taupe
            text-timberWolf rounded-lg outline-none
            border-none font-medium"
          />
          </label>
          <label className="flex flex-col">
          <span className="text-timberWolf font-medium mb-4">Your Email</span>
          <input required
            type="email"
            name="email"
            placeholder="What's your email?"
            className="bg-eerieBlack py-4 px-6
            placeholder:text-taupe
            text-timberWolf rounded-lg outline-none
            border-none font-medium"
          />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea required
              rows="7"
              name="message"
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>
          <Button variant="contained" color="grey" type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            endIcon={<SendIcon />}>
            Send
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
