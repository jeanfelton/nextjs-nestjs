import { useForm } from "react-hook-form";

const index = () => {
  type Inputs = {
    example: string;
    exampleRequired: string;
  };

  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input name="example" defaultValue="test" ref={register} />
        </div>
        <div>
          <input name="exampleRequired" ref={register({ required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default index;
