import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import {
  HERO_DATA,
  ABOUT_DATA,
  EXPERIENCE_DATA,
  SKILLS_DATA,
  PROJECTS_DATA,
  CONTACT_DATA,
  UI_LABELS,
} from "./constants/portfolioData";

test("renders hero, about, and lazy-loaded sections from constants", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: HERO_DATA.fullName })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: ABOUT_DATA.title })
  ).toBeInTheDocument();

  expect(
    await screen.findByRole("heading", { name: EXPERIENCE_DATA.title })
  ).toBeInTheDocument();
  expect(
    await screen.findByRole("heading", { name: SKILLS_DATA.title })
  ).toBeInTheDocument();
  expect(
    await screen.findByRole("heading", { name: PROJECTS_DATA.title })
  ).toBeInTheDocument();
  expect(
    await screen.findByRole("heading", { name: CONTACT_DATA.title })
  ).toBeInTheDocument();
});

test("supports interactive theme toggle and project filtering", async () => {
  render(<App />);

  await screen.findByRole("heading", { name: PROJECTS_DATA.title });

  // Toggle theme
  const themeBtn = screen.getByRole("button", {
    name: UI_LABELS.themeToggle.darkLabel,
  });
  fireEvent.click(themeBtn);
  expect(document.documentElement.getAttribute("data-theme")).toBe("light");

  // Filter projects by E-Commerce
  const ecommerceTab = screen.getByRole("tab", { name: "E-Commerce" });
  fireEvent.click(ecommerceTab);
  expect(
    screen.getByRole("heading", { name: "Gamessouk E-Commerce Storefront" })
  ).toBeInTheDocument();
});
