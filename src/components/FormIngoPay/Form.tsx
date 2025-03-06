"use client";
import { useState } from "react";
import styles from "./Form.module.css";
import { FormData } from "@/types/ingopay";
import { sendHmacRequest } from "@/services/ingopay";

const defaultFormData: FormData = {
  participant_unique_id1: process.env.NEXT_PUBLIC_ID_ONE || "",
  participant_unique_id2: process.env.NEXT_PUBLIC_ID_TWO || "",
  host_uri: process.env.NEXT_PUBLIC_HOST || "",
  recipient_information: {
    first_name: "Jack",
    last_name: "Frost",
    address_line1: "123 Main St",
    address_line2: "",
    city: "Atlanta",
    state: "GA",
    zip_code: "30313",
    email_address: "test@ingomoney.com",
    phone_number: "1231231234",
    mobile_number: "1231231234",
  },
};

export const FormIngoPay = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name in prev) {
        return { ...prev, [name]: value };
      } else {
        return {
          ...prev,
          recipient_information: {
            ...prev.recipient_information,
            [name]: value,
          },
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("JSON enviado:", JSON.stringify(formData, null, 2));
    sendHmacRequest(formData)
      .then((response) => {
        console.log("Respuesta:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.h3}>Información del destinatario</h3>

      <label className={styles.label}>
        Nombre:
        <input
          type="text"
          name="first_name"
          value={formData.recipient_information.first_name}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Apellido:
        <input
          type="text"
          name="last_name"
          value={formData.recipient_information.last_name}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Dirección 1:
        <input
          type="text"
          name="address_line1"
          value={formData.recipient_information.address_line1}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Dirección 2:
        <input
          type="text"
          name="address_line2"
          value={formData.recipient_information.address_line2}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Ciudad:
        <input
          type="text"
          name="city"
          value={formData.recipient_information.city}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Estado:
        <input
          type="text"
          name="state"
          value={formData.recipient_information.state}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Código Postal:
        <input
          type="text"
          name="zip_code"
          value={formData.recipient_information.zip_code}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Email:
        <input
          type="email"
          name="email_address"
          value={formData.recipient_information.email_address}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Teléfono:
        <input
          type="text"
          name="phone_number"
          value={formData.recipient_information.phone_number}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.label}>
        Móvil:
        <input
          type="text"
          name="mobile_number"
          value={formData.recipient_information.mobile_number}
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <button className={styles.button} type="submit">
        Enviar
      </button>
    </form>
  );
};
