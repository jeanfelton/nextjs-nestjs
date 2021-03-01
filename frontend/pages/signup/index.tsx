import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "antd";
import styles from "./SignUp.module.scss";

const index = () => {
  type Inputs = {
    email: string;
    password: string;
  };

  const { register, handleSubmit, watch, errors, control } = useForm<Inputs>();
  const onSubmit = (data) => {console.log(data);}

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formElement}>
          <Controller
            name="email"
            control={control}
            defaultValue=""            
            render={({ onChange, value }) => (
              <Input placeholder="enter email" onChange={onChange} value={value} />
            )}
          />
        </div>
        <div className={styles.formElement}>
        <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ onChange, value }) => (
              <Input placeholder="enter password" onChange={onChange} value={value} />
            )}
          />
          {/* <input name="exampleRequired" ref={register({ required: true })} />
          {errors.password && <span>This field is required</span>} */}
        </div>
        <div>
        <Button type="primary"  htmlType="submit">Register</Button>
        </div>
      </form>
    </div>
  );
};

export default index;
