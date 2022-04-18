import DownArrow from "@/assets/raw/down-arrow.svg";
import LanguageIcon from "@/assets/raw/exercism-language-icon.svg";

export function LanguageSelectButton(){
   return (
        <button className="testimonials__container__header__language-select flex-row-align">
          <img src={LanguageIcon} width="42px" />
          <img src={DownArrow} width="13px" />
        </button>
   )
}