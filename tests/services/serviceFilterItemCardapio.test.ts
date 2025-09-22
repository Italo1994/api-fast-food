import { serviceFilterItemCardapio } from "../../src/services/filter-item-cardapio-service";
import { repositoryCardapio } from "../../src/repositories/cardapio-repository";

// Mock da função do repositório
jest.mock("../../src/repositories/cardapio-repository", () => ({
  repositoryCardapio: jest.fn()
}));

describe("serviceFilterItemCardapio", () => {
  it("deve formatar a URL e buscar o prato corretamente", async () => {
    // Simula retorno do banco
    (repositoryCardapio as jest.Mock).mockResolvedValueOnce([
      { nome: "Pizza Margherita", preco: 35.9 }
    ]);

    const url = "/api/v1/list/prato?p=Pizza%20Margherita";

    const result = await serviceFilterItemCardapio(url);

    expect(repositoryCardapio).toHaveBeenCalledWith("Pizza Margherita");
    expect(result).toEqual([{ nome: "Pizza Margherita", preco: 35.9 }]);
  });

  it("deve lidar com URL sem parâmetro", async () => {
    (repositoryCardapio as jest.Mock).mockResolvedValueOnce([]);

    const result = await serviceFilterItemCardapio(undefined);

    expect(repositoryCardapio).toHaveBeenCalledWith("");
    expect(result).toEqual([]);
  });
});
