# Webová aplikace - TO DO LIST

## Popis projektu

## Základní funkční požadavky a funkční specifikace

### Datový konceptuální model
- **Úkol**: Obsahuje:
  - Název úkolu (textový řetězec)
  - Popis úkolu (volitelný textový řetězec)
  - Datum splnění (formát ISO)
- **Operace**: Přidání, úprava, mazání a zobrazení úkolů.

### Charakteristika funkcí aplikace
- **Přidání úkolu**: Uživatel může přidat nový úkol s názvem, popisem a termínem splnění.
- **Zobrazení seznamu úkolů**: Všechny úkoly se zobrazují v přehledném seznamu.
- **Úprava úkolu**: Kliknutím na existující úkol lze změnit jeho atributy.
- **Mazání úkolu**: Umožňuje odstranění úkolu ze seznamu.

### Specifikace uživatelských rolí a oprávnění
-  Máme přístup k veškerým funkcím aplikace (přidání, editace, mazání)

### Uživatelské grafické rozhraní 
- **Formulář pro přidání úkolu**: Tři vstupní pole (název, popis, termín) a tlačítko pro odeslání.
- **Seznam úkolů**: Každý úkol je zobrazen jako karta s názvem, popisem a termínem. Obsahuje možnost úpravy a smazání.
- **Návrhy**:
  - Responsivní design (podle velikosti obrazovky mění rozložení seznamu).
  - Intuitivní ovládání (jasně označená tlačítka a přehledná navigace).


---

## Technické řešení a technická specifikace

### Datový logický model
- **Tabulka "Tasks"**:
  - `id`: Unikátní identifikátor (integer, auto-increment).
  - `name`: Název úkolu (string, max. délka 255 znaků).
  - `description`: Popis úkolu (text, volitelné).
  - `dueDate`: Termín splnění (date).

### Popis architektury

#### Frontend
- **HTML5**: Struktura aplikace, formulář a seznam úkolů.
- **CSS3**: Stylování aplikace (responsivní design, hover efekty, přehlednost).
- **JavaScript**: Logika pro manipulaci s DOM, ukládání a načítání úkolů.

#### Backend
- Prozatím není implementován; data jsou ukládána v `localStorage`.

### Popis tříd a funkcí
- **TaskFormHandler**: Zajišťuje validaci a sběr dat z formuláře.
- **TaskManager**:
  - `addTask(name, description, dueDate)`: Přidání nového úkolu.
  - `editTask(id, updatedTask)`: Úprava existujícího úkolu.
  - `deleteTask(id)`: Odstranění úkolu.
  - `getTasks()`: Načtení všech úkolů.
- **LocalStorageHandler**:
  - `saveTasks(tasks)`: Ukládá seznam úkolů do localStorage.
  - `loadTasks()`: Načítá seznam úkolů z localStorage.

### Použité technologie
- **HTML**: Struktura obsahu.
- **CSS**: Styling, zajištění responzivity.
- **JavaScript**: Dynamická manipulace s DOM, správa událostí.
- **localStorage**: Persistentní úložiště na straně klienta pro ukládání úkolů.

---

## Popis ovládání aplikace
- **Přidání úkolu**:
  1. Uživatel vyplní pole "Název úkolu", "Popis úkolu" (volitelné) a "Termín".
  2. Klikne na tlačítko "Přidat úkol".
  3. Úkol se zobrazí v seznamu.
- **Úprava úkolu**:
  1. Kliknutím na úkol v seznamu se jeho data načtou zpět do formuláře.
  2. Po úpravě se úkol znovu uloží kliknutím na tlačítko "Přidat úkol".
- **Mazání úkolu**:
  1. Kliknutím na červený symbol "✖" vedle úkolu se tento úkol odstraní.

---

## Možnosti pro vylepšení
- **Notifikace**:
  - Přidání upozornění na blížící se termíny úkolů.
- **Filtrování a vyhledávání**:
  - Možnost filtrovat úkoly podle termínu nebo vyhledávat podle názvu.
- **Synchronizace s cloudem**:
  - Umožnit ukládání dat na server nebo synchronizaci mezi zařízeními.
- **Více uživatelských účtů**:
  - Zavedení registrace a přihlašování pro oddělení dat jednotlivých uživatelů.
- **Pokročilé statistiky**:
  - Poskytovat přehled o dokončených a nedokončených úkolech.
