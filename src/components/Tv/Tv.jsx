import styles from './tv.module.css';
export const Tv = (props) => {
  
  const {name, type, image} = props; 
  return (
    <div>
     <h1 className = {styles.title}>name: {name}</h1> 
     <span>type: {type}</span> 
     <img src={image.medium} alt="" />
    </div>
  );
};