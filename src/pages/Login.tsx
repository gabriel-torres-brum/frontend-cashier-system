import { Input } from "../components/Input";
import { useLoginPage } from "../hooks/useLoginPage";

import loginBackgroundImg from "../assets/login-background.svg";
import { LockKey, UserCircle } from "@phosphor-icons/react";
import { Select } from "../components/Select";
import { Divider } from "../components/Divider";
import { Button } from "../components/Button";

export const Login = () => {
  const {
    handleLogin,
    setUserId,
    userId,
    usersList,
    setPassword,
  } = useLoginPage();

  return (
    <div
      className="h-full flex items-center justify-center "
      style={{ backgroundImage: `url(${loginBackgroundImg})` }}
    >
      <div className="flex items-center rounded shadow-md border border-gray-200 bg-white overflow-hidden">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-2 p-4 w-full relative"
        >
          <div className="flex flex-col gap-2 translate-x-0 opacity-100 transition-all duration-300">
            <div className="flex flex-col gap-2">
              <small className="font-light tracking-wide text-center">
                Sistema de controle de caixa
              </small>
              <Divider />
              <div className="flex items-center gap-2">
                <UserCircle size={20} />
                <Select
                  name="name"
                  id="name"
                  className="!p-1 text-xs"
                  onChange={(e) => setUserId(e.target.value)}
                >
                  <option defaultChecked={userId === ""}>
                    Clique para selecionar o usuário
                  </option>
                  {usersList.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}.
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LockKey size={20} />
              <Input
                name="password"
                id="password"
                type="password"
                className="!p-1 text-xs"
                placeholder="Digite a senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div
            className="flex flex-col gap-2"
          >
            <Button children="Entrar" />
          </div>
        </form>
      </div>
    </div>
  );
};
