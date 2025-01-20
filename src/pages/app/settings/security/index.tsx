import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Security() {
  const [showPasswordContent, setShowPasswordContent] =
    useState<boolean>(false);
  const [showPinContent, setShowPinContent] = useState<boolean>(false);
  function isContentPasswordShowed() {
    setShowPasswordContent(!showPasswordContent);
  }

  function isContentPinShowed() {
    setShowPinContent(!showPinContent);
  }

  return (
    <div>
      <h1 className="text-xl font-semibold">Segurança</h1>
      <main>
        <form className="mt-4 flex flex-col gap-2">
          <h2 className="mb-4 flex text-base font-medium">
            <button
              type="button"
              className="flex flex-1 justify-between pt-4 text-left"
              onClick={isContentPasswordShowed}
            >
              <span>Mudar palavra-passe</span>
              <ChevronDown />
            </button>
          </h2>
          {showPasswordContent && (
            <>
              <fieldset className="flex flex-col gap-3">
                <Label htmlFor="oldPassword">Antiga palavra-passe</Label>
                <Input placeholder="" id="oldPassword" type="password" />
              </fieldset>
              <fieldset className="flex flex-col gap-3">
                <Label htmlFor="newPassword">Nova palavra-passe</Label>
                <Input placeholder="" id="newPassword" type="password" />
              </fieldset>
              <fieldset className="flex flex-col gap-3">
                <Label htmlFor="confirmPassword">
                  Confirmação palavra-passe
                </Label>
                <Input placeholder="" id="confirmPassword" type="password" />
              </fieldset>
              <Button>Mudar palavra-passe</Button>
            </>
          )}
        </form>
        <Separator className="my-4" />
        <form className="mt-4 flex flex-col gap-3">
          <h2 className="mb-4 flex text-base font-medium">
            <button
              type="button"
              className="flex flex-1 justify-between pt-4 text-left"
              onClick={isContentPinShowed}
            >
              <span>Mudar o pin</span>
              <ChevronDown />
            </button>
          </h2>
          {showPinContent && (
            <>
              <fieldset className="flex flex-col gap-3">
                <Label htmlFor="oldPin">Antigo pin</Label>
                <Input placeholder="" id="oldPin" type="number" />
              </fieldset>
              <fieldset className="flex flex-col gap-3">
                <Label htmlFor="newPin">Novo pin</Label>
                <Input placeholder="" id="newPin" type="number" />
              </fieldset>
              <fieldset className="flex flex-col gap-3">
                <Label htmlFor="confirmPin">Confirmação do pin</Label>
                <Input placeholder="" id="confirmPin" type="number" />
              </fieldset>
              <Button>Mudar pin</Button>
            </>
          )}
        </form>
        <Separator className="my-4" />
      </main>
    </div>
  );
}
