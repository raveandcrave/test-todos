import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Добавление нового todo", () => {
  it("Добавление нового todo", async () => {
    render(<App />);

    const todoInput = screen.getByPlaceholderText("Add new todo");

    const todoTitle = "прогнать тесты";
    act(() => {
      userEvent.type(todoInput, todoTitle);
    });

    const addButton = screen.getByTestId("addButton");
    act(() => {
      userEvent.click(addButton);
    });

    expect(await screen.findByText(todoTitle)).toBeInTheDocument();
  });
});

describe("Фильтрация Todo", () => {
  it("Получение активных todo", async () => {
    render(<App />);

    const filterActiveButton = screen.getByTestId("filterActiveButton");

    act(() => {
      userEvent.click(filterActiveButton);
    });

    expect(await screen.findByText("Тестовое задание")).toBeInTheDocument();
    expect(await screen.findByText("Покрытие тестами")).toBeInTheDocument();
    expect(screen.queryByText("Прекрасный код")).not.toBeInTheDocument();
  });

  it("Получение завершенных todo", async () => {
    render(<App />);

    const filterCompletedButton = screen.getByTestId("filterCompletedButton");

    act(() => {
      userEvent.click(filterCompletedButton);
    });

    expect(await screen.findByText("Прекрасный код")).toBeInTheDocument();
    expect(screen.queryByText("Тестовое задание")).not.toBeInTheDocument();
    expect(screen.queryByText("Покрытие тестами")).not.toBeInTheDocument();
  });

  it("Получение всех todo", async () => {
    render(<App />);

    const filterAllButton = screen.getByTestId("filterAllButton");

    act(() => {
      userEvent.click(filterAllButton);
    });

    expect(await screen.findByText("Тестовое задание")).toBeInTheDocument();
    expect(await screen.findByText("Покрытие тестами")).toBeInTheDocument();
    expect(await screen.findByText("Прекрасный код")).toBeInTheDocument();
  });
});

describe("Очистка выполненных Todo", () => {
  it("Очистка выполненных Todo", async () => {
    render(<App />);

    const clearCompletedButton = screen.getByTestId("clearCompletedButton");

    act(() => {
      userEvent.click(clearCompletedButton);
    });

    expect(await screen.findByText("Тестовое задание")).toBeInTheDocument();
    expect(await screen.findByText("Покрытие тестами")).toBeInTheDocument();
    expect(screen.queryByText("Прекрасный код")).not.toBeInTheDocument();
  });
});

describe("Переключение чекбокса Todo", () => {
  it("Переключение чекбокса Todo", async () => {
    render(<App />);

    const checkbox =
      screen.getByLabelText<HTMLButtonElement>("Тестовое задание");

    expect(checkbox).toHaveAttribute("aria-checked", "false");

    act(() => {
      userEvent.click(checkbox);
    });

    expect(checkbox).toHaveAttribute("aria-checked", "true");
  });
});
