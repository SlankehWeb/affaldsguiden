import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "./orderpart2.scss";

const OrderPart2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { container_id } = useParams();

  const formSubmit = async (formObject) => {
    const api_endpoint = "http://localhost:4000/orders";

    const formData = new URLSearchParams();
    formData.append("container_id", container_id);
    formData.append("fullname", formObject.fullname);
    formData.append("address", formObject.address);
    formData.append("zipcode", formObject.zipcode);
    formData.append("city", formObject.city);
    formData.append("email", formObject.email);
    formData.append("phone", formObject.phone);

    try {
      const result = await axios.post(api_endpoint, formData);
      if (result.data) {
        console.log(result.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ordercontainer">
      <div>
        <img
          src={require("./Rectangle1.png")}
          alt="first_step_form"
          className="colum1"
        />
      </div>
      <div className="colum2">
        <div className="colum2text">
          <p>Trin 2</p>
          <h2>Hvor skal den leveres?</h2>
          <p>
            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
            concludaturque usu, facete detracto patrioque an per, lucilius
            pertinacia eu vel.
          </p>
        </div>
        <form onSubmit={handleSubmit(formSubmit)}>
          <input
            type="hidden"
            value={container_id}
            {...register("container_id")}
          />
          <div>
            <input
              id="fullname"
              placeholder="Navn"
              {...register("fullname", {
                required: "Du skal indtaste dit fuldenavn",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Du skal indtaste et gyldigt navn",
                },
              })}
            />
            {errors.fullname && <span>{errors.fullname.message}</span>}
          </div>

          <div>
            <input
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Du skal indtaste din email",
                pattern: {
                  value: /^\S+@\S+$/,
                  message: "Du skal indtaste en gyldig mailadresse",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div>
            <input
              id="phone"
              placeholder="Telefon"
              {...register("phone", {
                required: "Du skal indtaste dit telefonnummer",
                pattern: {
                  value: /^[0-9]{8}$/,
                  message: "Du skal indtaste en gyldig telefonnummer",
                },
              })}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </div>

          <div>
            <input
              id="address"
              placeholder="Addresse"
              {...register("address", {
                required: "Du skal indtaste din adresse",
              })}
            />
            {errors.address && <span>{errors.address.message}</span>}
          </div>

          <div>
            <input
              id="zipcode"
              placeholder="Postnummer"
              {...register("zipcode", {
                required: "Du skal indtaste dit postnummer",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "Du skal indtaste et gyldigt postnummer",
                },
                min: {
                  value: 999,
                  message: "Postnummer kan ikke være mindre end 1000",
                },
                max: {
                  value: 9990,
                  message: "Postnummer kan ikke være større end 9990",
                },
              })}
            />
            {errors.zipcode && <span>{errors.zipcode.message}</span>}
          </div>

          <div>
            <input
              id="city"
              placeholder="By"
              {...register("city", {
                required: "Du skal indtaste et bynavn",
              })}
            />
            {errors.city && <span>{errors.city.message}</span>}
          </div>

          <div>
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPart2;
