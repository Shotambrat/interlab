import S from "@sanity/desk-tool/structure-builder";

export const structure = () =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("banner").title("Баннеры"),
      ...S.documentTypeListItems().filter(
        (listItem) => !["banner"].includes(listItem.getId())
      ),
    ]);