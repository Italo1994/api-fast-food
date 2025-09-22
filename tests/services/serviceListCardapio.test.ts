import { serviceListCardapio } from "../../src/services/list-cardapio-service";
import { repositoryCardapio } from "../../src/repositories/cardapio-repository";

jest.mock("../../src/repositories/cardapio-repository", () => ({
  repositoryCardapio: jest.fn()
}));

describe("serviceListCardapio", () => {
  it("deve listar todos os pratos", async () => {
    (repositoryCardapio as jest.Mock).mockResolvedValueOnce([
      { nome: "Pizza Margherita", preco: 35.9 },
      { nome: "Lasanha", preco: 29.5 }
    ]);

    const result = await serviceListCardapio();

    expect(repositoryCardapio).toHaveBeenCalled();
    expect(result.length).toBe(2);
    expect(result.categorias[0].itens[0].nome).toBe("Pizza Margherita");
  });
});
