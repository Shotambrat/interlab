
export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("banner").title("Баннеры"),
      ...S.documentTypeListItems().filter(
        (listItem) => !["banner"].includes(listItem.getId())
      ),
    ]);