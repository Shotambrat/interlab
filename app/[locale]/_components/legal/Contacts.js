"use client";
import ButtonModalRedBg from "../buttons/ButtonModalRedBg";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("Legal.contacts");
  return (
    <div className="flex w-full max-mdl:flex-col max-w-[1440px] px-2 mx-auto max-mdl:gap-5">
      <div className="flex-1 flex flex-col gap-6">
        <h3 className="text-4xl max-mdx:text-3xl font-bold">{t("title")}</h3>
        <p className="text-neutral-400 w-full max-w-[400px]">
          {t("description")}
        </p>
        <a
          onClick={async () => {
            try {
              let response = await fetch(
                "https://interlab.mrjtrade.uz/api/count?button=call",
                {
                  method: "POST",
                }
              );
              console.log("Response Of Count", response.json());
            } catch (error) {
              console.log("error to counter fetching", error);
            }
          }}
          href="tel:+998971504747"
          className="max-mdl:hidden self-start"
        >
          <ButtonModalRedBg title={t("call")} />
        </a>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-col gap-2 max-mdl:flex-1">
          <a
            onClick={async () => {
              try {
                let response = await fetch(
                  "https://interlab.mrjtrade.uz/api/count?button=call",
                  {
                    method: "POST",
                  }
                );
                console.log("Response Of Count", response.json());
              } catch (error) {
                console.log("error to counter fetching", error);
              }
            }}
            className="text-2xl font-medium"
            href="tel:+998971504747"
          >
            +998 (97) 150 47 47
          </a>
          <p className="text-neutral-400">{t("phone-for-call")} 1</p>
        </div>
        <hr />
        <div className="flex flex-col gap-2 max-mdl:flex-1">
          <a
            onClick={async () => {
              try {
                let response = await fetch(
                  "https://interlab.mrjtrade.uz/api/count?button=call",
                  {
                    method: "POST",
                  }
                );
                console.log("Response Of Count", response.json());
              } catch (error) {
                console.log("error to counter fetching", error);
              }
            }}
            className="text-2xl font-medium"
            href="tel:+998909662368"
          >
            +998 (90) 966 23 68
          </a>
          <p className="text-neutral-400">{t("phone-for-call")} 2</p>
        </div>
        <hr />
      </div>
      <a
        onClick={async () => {
          try {
            let response = await fetch(
              "https://interlab.mrjtrade.uz/api/count?button=call",
              {
                method: "POST",
              }
            );
            console.log("Response Of Count", response.json());
          } catch (error) {
            console.log("error to counter fetching", error);
          }
        }}
        href="tel:+99989898989"
        className="mdl:hidden self-start"
      >
        <ButtonModalRedBg title={"Позвонить"} />
      </a>
    </div>
  );
}
