import * as yup from "yup";

const validations = () => {
  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido!").required("Obrigatório"),
    password: yup.string().min(4, "Sua senha deve conter pelomenos 4 caractéres.").required("Obrigatório")
  });

  return schema;
}

export default validations;
