import Business from "./Business";
import Button from "@mui/material/Button";

export default function BusinessList() {
  return (
    <div className="width-30">
      <div className="border margin-top-50">
        <Business />
        <p className="margin-all-16">
          Dirección: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur aspernatur, nostrum deserunt, tempore facere aperiam soluta
          nihil accusantium dignissimos
        </p>
        <div className="center">
          <Button type="submit" className="green-button center">
            Ver Información
          </Button>
        </div>
      </div>
      <div className="border margin-top-50">
        <Business />
        <p className="margin-all-16">
          Dirección: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur aspernatur, nostrum deserunt, tempore facere aperiam soluta
          nihil accusantium dignissimos
        </p>
        <div className="center">
          <Button type="submit" className="green-button center">
            Ver Información
          </Button>
        </div>
      </div>
    </div>
  );
}
