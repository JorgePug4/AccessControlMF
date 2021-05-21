import * as React from 'react';
import { connect } from 'react-redux';

import { useForm } from "react-hook-form";

interface fotmdata {
  firstNamed: string,
  gender: string
}

function Home() {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data: fotmdata) => console.log(data.firstNamed, data.gender);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstNamed", { required: true })} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />

    </form >
  );
}

export default connect()(Home);
