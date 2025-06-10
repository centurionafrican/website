import IconInterface from "@/types/icons";
import ArrowLeftSVG from "@/assets/icons/ArrowLeftSVG";
import ArrowRightSVG from "@/assets/icons/ArrowRightSVG";
import BugSVG from "@/assets/icons/BugSVG";
import CardSVG from "@/assets/icons/CardSVG";
import CaretDownSVG from "@/assets/icons/CaretDownSVG";
import {
  default as CaretLeftSVG,
  default as CaretRightSVG,
} from "@/assets/icons/CaretRightSVG";
import CaretUpSVG from "@/assets/icons/CaretUpSVG";
import CheckCircle from "@/assets/icons/CheckCircleSVG";
import CheckSVG from "@/assets/icons/CheckSVG ";
import ContactSVG from "@/assets/icons/ContactSVG";
import CreditedSVG from "@/assets/icons/CreditedSVG";
import DebitedSVG from "@/assets/icons/DebitedSVG";
import DustbinSVG from "@/assets/icons/DustbinSVG";
import EditSVG from "@/assets/icons/EditSVG";
import EllipsisSVG from "@/assets/icons/EllipsisSVG";
import ExchangeSVG from "@/assets/icons/ExchangeSVG";
import ExternalLinkSVG from "@/assets/icons/ExternalLinkSVG";
import EyeCloseSVG from "@/assets/icons/EyeCloseSVG";
import EyeOpenSVG from "@/assets/icons/EyeOpenSVG";
import FavoriteSVG from "@/assets/icons/FavoriteSVG";
import GiftSVG from "@/assets/icons/GiftSVG";
import HomeSVG from "@/assets/icons/HomeSVG";
import LoanSVG from "@/assets/icons/LoanSVG";
import MerchantSVG from "@/assets/icons/MerchantSVG";
import MessageSVG from "@/assets/icons/MessageSVG";
import MinusSVG from "@/assets/icons/MinusSVG";
import NotificationSVG from "@/assets/icons/NotificationSVG";
import PlusSVG from "@/assets/icons/PlusSVG";
import RefreshSVG from "@/assets/icons/RefreshSVG";
import RenameSVG from "@/assets/icons/RenameSVG";
import SavingSVG from "@/assets/icons/SavingSVG";
import ScanSVG from "@/assets/icons/ScanSVG";
import SearchSVG from "@/assets/icons/SearchSVG";
import ServicesSVG from "@/assets/icons/ServicesSVG";
import SettingSVG from "@/assets/icons/SettingSVG";
import TransactionSVG from "@/assets/icons/TransactionSVG";
import HandsSVG from "@/assets/icons/HandsSVG";
import UncheckCircleSVG from "@/assets/icons/UncheckCircleSVG";
import UncheckSVG from "@/assets/icons/UncheckSVG";
import UserSVG from "@/assets/icons/UserSVG";
import UsersSVG from "@/assets/icons/UsersSVG";
import WalletSVG from "@/assets/icons/WalletSVG";
import InsuranceSVG from "@/assets/icons/InsuranceSVG";
import SubscribersSVG from "@/assets/icons/SubscribersSVG";
import CarSVG from "@/assets/icons/CarSVG";
// AIB-related imports removed
// import QuotationVG from "@/assets/icons/QuotationSVG";
// import PoliciesSVG from "@/assets/icons/PoliciesSVG";
import DashboardSVG from "@/assets/icons/DashboardSVG";
import LoadingSVG from "@/assets/icons/LoadingSVG";
import MenuSVG from "@/assets/icons/MenuSVG";
import LogoutSVG from "@/assets/icons/LogoutSVG";
import CloseSVG from "@/assets/icons/CloseSVG";
import DateStartSVG from "@/assets/icons/DateStartSVG";
import DateEndSVG from "@/assets/icons/DateStartSVG";
import CheckSVGWhite from "@/assets/icons/checkSVGWhite";
import CertifiedSVG from "@/assets/icons/CertifiedSVG";
import WheelSVG from "@/assets/icons/WheelSVG";
import ArrowUpRightSVG from "@/assets/icons/ArrowUpRightSVG";

export default function Icon({ name = "home" }: IconInterface) {
  let IconName: JSX.Element = <span />;
  switch (name) {
    case "dashboard":
      IconName = DashboardSVG({ height: "1em", width: "1em" });
      break;
    case "car":
      IconName = CarSVG({ height: "1em", width: "1em" });
      break;
    case "date-start":
      IconName = DateStartSVG({ height: "1em", width: "1em" });
      break;
    case "date-end":
      IconName = DateEndSVG({ height: "1em", width: "1em" });
      break;
    case "logout":
      IconName = LogoutSVG({ height: "1em", width: "1em" });
      break;
    case "loading":
      IconName = LoadingSVG({ height: "1em", width: "1em" });
      break;
    case "close":
      IconName = CloseSVG({ height: "1em", width: "1em" });
      break;
    case "menu":
      IconName = MenuSVG({ height: "1em", width: "1em" });
      break;
    case "subscribers":
      IconName = SubscribersSVG({ height: "1em", width: "1em" });
      break;
    // AIB-related cases removed
    // case "quotation":
    //   IconName = QuotationVG({ height: "1em", width: "1em" });
    //   break;
    // case "policies":
    //   IconName = PoliciesSVG({ height: "1em", width: "1em" });
    //   break;
    case "bug":
      IconName = BugSVG({ height: "1em", width: "1em" });
      break;
    case "card":
      IconName = CardSVG({ height: "1em", width: "1em" });
      break;
    case "contact":
      IconName = ContactSVG({ height: "1em", width: "1em" });
      break;
    case "home":
      IconName = HomeSVG({ height: "1em", width: "1em" });
      break;
    case "loan":
      IconName = LoanSVG({ height: "1em", width: "1em" });
      break;
    case "message":
      IconName = MessageSVG({ height: "1em", width: "1em" });
      break;
    case "notification":
      IconName = NotificationSVG({ height: "1em", width: "1em" });
      break;
    case "saving":
      IconName = SavingSVG({ height: "1em", width: "1em" });
      break;
    case "services":
      IconName = ServicesSVG({ height: "1em", width: "1em" });
      break;
    case "setting":
      IconName = SettingSVG({ height: "1em", width: "1em" });
      break;
    case "transaction":
      IconName = TransactionSVG({ height: "1em", width: "1em" });
      break;
    case "hands":
      IconName = HandsSVG({ height: "1em", width: "1em" });
      break;
    case "user":
      IconName = UserSVG({ height: "1em", width: "1em" });
      break;
    case "users":
      IconName = UsersSVG({ height: "1em", width: "1em" });
      break;
    case "wallet":
      IconName = WalletSVG({ height: "1em", width: "1em" });
      break;
    case "caret-down":
      IconName = CaretDownSVG({ height: "1em", width: "1em" });
      break;
    case "caret-up":
      IconName = CaretUpSVG({ height: "1em", width: "1em" });
      break;
    case "caret-left":
      IconName = CaretLeftSVG({ height: "1em", width: "1em" });
      break;
    case "caret-right":
      IconName = CaretRightSVG({ height: "1em", width: "1em" });
      break;
    case "eye-open":
      IconName = EyeOpenSVG({ height: "1em", width: "1em" });
      break;
    case "eye-close":
      IconName = EyeCloseSVG({ height: "1em", width: "1em" });
      break;
    case "plus":
      IconName = PlusSVG({ height: "1em", width: "1em" });
      break;
    case "merchant":
      IconName = MerchantSVG({ height: "1em", width: "1em" });
      break;
    case "gift":
      IconName = GiftSVG({ height: "1em", width: "1em" });
      break;
    case "scan":
      IconName = ScanSVG({ height: "1em", width: "1em" });
      break;
    case "minus":
      IconName = MinusSVG({ height: "1em", width: "1em" });
      break;
    case "ellipsis":
      IconName = EllipsisSVG({ height: "1em", width: "1em" });
      break;
    case "check-circle":
      IconName = CheckCircle({ height: "1em", width: "1em" });
      break;
    case "uncheck-circle":
      IconName = UncheckCircleSVG({ height: "1em", width: "1em" });
      break;
    case "check":
      IconName = CheckSVG({ height: "1em", width: "1em" });
      break;
    case "check-white":
      IconName = CheckSVGWhite({ height: "1em", width: "1em" });
      break;
    case "uncheck":
      IconName = UncheckSVG({ height: "1em", width: "1em" });
      break;
    case "dustbin":
      IconName = DustbinSVG({ height: "1em", width: "1em" });
      break;
    case "rename":
      IconName = RenameSVG({ height: "1em", width: "1em" });
      break;
    case "exchange":
      IconName = ExchangeSVG({ height: "1em", width: "1em" });
      break;
    case "refresh":
      IconName = RefreshSVG({ height: "1em", width: "1em" });
      break;
    case "search":
      IconName = SearchSVG({ height: "1em", width: "1em" });
      break;
    case "external-link":
      IconName = ExternalLinkSVG({ height: "1em", width: "1em" });
      break;
    case "debited":
      IconName = DebitedSVG({ height: "1em", width: "1em" });
      break;
    case "credited":
      IconName = CreditedSVG({ height: "1em", width: "1em" });
      break;
    case "arrow-left":
      IconName = ArrowLeftSVG({ height: "1em", width: "1em" });
      break;
    case "arrow-right":
      IconName = ArrowRightSVG({ height: "1em", width: "1em" });
      break;
    case "edit":
      IconName = EditSVG({ height: "1em", width: "1em" });
      break;
    case "favorite":
      IconName = FavoriteSVG({ height: "1em", width: "1em" });
      break;
    case "insurance":
      IconName = InsuranceSVG({ height: "1em", width: "1em" });
      break;
    case "certified":
      IconName = CertifiedSVG({ height: "1em", width: "1em" });
      break;
    case "wheel":
      IconName = WheelSVG({ height: "1em", width: "1em" });
      break;
    case "arrow-up-right":
      IconName = ArrowUpRightSVG({ height: "1em", width: "1em" });
      break;
    default:
      console.warn(`Unknown icon name: ${name}`);
  }

  return <>{IconName}</>;
}
