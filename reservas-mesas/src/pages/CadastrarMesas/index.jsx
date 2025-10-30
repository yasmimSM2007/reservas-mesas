import styles from "./cadastrarMesas.module.css";

function CadastrarMesas() {
  return (
    <div className={styles.container}>
      <h1>Cadastrar Mesas</h1>
      <form>
        <label htmlFor="idMesa">Número da Mesa:</label>
        <input type="text" id="idMesa" placeholder="Ex: 01" />

        <label htmlFor="capacidade">Capacidade da Mesa:</label>
        <input type="number" id="capacidade" placeholder="Ex: 4" />

        <label htmlFor="status">Status da Mesa:</label>
        <select id="status">
          <option value="disponível">Disponível</option>
          <option value="ocupada">Ocupada</option>
        </select>

        <div className={styles.buttons}>
          <button type="submit" className={styles.salvar}>Salvar</button>
          <button type="button" className={styles.editar}>Editar</button>
          <button type="button" className={styles.excluir}>Excluir</button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarMesas;
