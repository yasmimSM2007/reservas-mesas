import styles from "./reservarMesas.module.css";

function ReservarMesas() {
  return (
    <div className={styles.container}>
      <h1>Reservar Mesas</h1>
      <form>
        <label htmlFor="data">Data da Reserva:</label>
        <input type="date" id="data" />

        <label htmlFor="hora">Horário:</label>
        <input type="time" id="hora" />

        <label htmlFor="nome">Nome do Cliente:</label>
        <input type="text" id="nome" placeholder="Ex: João Silva" />

        <label htmlFor="contato">Contato:</label>
        <input type="tel" id="contato" placeholder="(00) 00000-0000" />

        <label htmlFor="mesa">Selecione a Mesa:</label>
        <select id="mesa">
          <option value="1">Mesa 1</option>
          <option value="2">Mesa 2</option>
          <option value="3">Mesa 3</option>
        </select>

        <button type="submit" className={styles.confirmar}>
          Confirmar Reserva
        </button>
      </form>
    </div>
  );
}

export default ReservarMesas;
