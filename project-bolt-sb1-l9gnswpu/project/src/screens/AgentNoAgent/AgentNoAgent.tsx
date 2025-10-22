import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const navigationItems = [
  {
    icon: "/u-heart-rate.svg",
    label: "Dashboard",
    active: false,
  },
  {
    icon: "/svg-1.svg",
    label: "Agents",
    active: true,
  },
  {
    icon: "/svg.svg",
    label: "Usage",
    active: false,
  },
  {
    icon: "/group.png",
    label: "Chat Log",
    active: false,
  },
];

const settingsSubItems = [
  { label: "Generals", active: false },
  { label: "Team", active: true },
  { label: "Plan", active: false },
  { label: "Billings", active: false },
];

export const AgentNoAgent = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-[#ffffff] overflow-hidden">
      <aside className="flex flex-col w-[260px] bg-[#ffffff] border-r border-[#e0e2e7]">
        <header className="flex items-center justify-center gap-4 px-6 py-6 border-b border-[#e0e2e7]">
          <div className="flex items-center gap-3">
            <img className="w-9 h-9" alt="Symbol" src="/symbol.svg" />
            <div className="[font-family:'Urbanist',Helvetica] font-bold text-[#1b1d23] text-[32px] tracking-[-0.32px] leading-[48px] whitespace-nowrap">
              Kirichat
            </div>
          </div>
        </header>

        <nav className="flex flex-col gap-6 px-6 py-6 flex-1">
          <div className="flex flex-col gap-1">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-3 px-4 py-2 rounded-[10px] overflow-hidden ${
                  item.active ? "bg-[#f7f8f9]" : ""
                }`}
              >
                <img className="w-5 h-5" alt={item.label} src={item.icon} />
                <span
                  className={`flex-1 text-left [font-family:'Inter',Helvetica] font-medium text-base tracking-[0.20px] leading-6 ${
                    item.active ? "text-[#1b1d23]" : "text-[#3d4350]"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}

            <button className="flex items-center justify-between px-4 py-2 rounded-[10px] overflow-hidden">
              <div className="flex items-center gap-3">
                <img
                  className="w-5 h-5"
                  alt="Framework Settings"
                  src="/svg-2.svg"
                />
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-base tracking-[0.20px] leading-6">
                  Framework SettingsIcon
                </span>
              </div>
              <img
                className="w-5 h-5"
                alt="Expand"
                src="/u-angle-right-b.svg"
              />
            </button>

            <div className="flex flex-col gap-[3px] mt-2">
              {settingsSubItems.map((item, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                    item.active ? "bg-[#f7f8f9]" : ""
                  }`}
                >
                  <span
                    className={`flex-1 text-left [font-family:'Inter',Helvetica] text-xs tracking-[-0.24px] leading-4 ${
                      item.active
                        ? "font-medium text-black"
                        : "font-semibold text-[#5c5e64]"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between px-6 py-6 bg-[#ffffff] border-b border-[#e0e2e7]">
          <div className="flex items-center gap-4 px-4 py-1.5 bg-[#ffffff] rounded-[10px] border border-solid border-[#e0e2e7]">
            <span className="[font-family:'Inter',Helvetica] font-semibold text-[#3d4350] text-base tracking-[0.20px] leading-6">
              Kirichat Framework Nama
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Badge className="px-1.5 py-0.5 bg-[#ffffff] rounded-lg border border-solid border-[#e0e2e7] shadow-innere-shadow-gray-large h-auto">
              <span className="[font-family:'Urbanist',Helvetica] font-semibold text-[#3d4350] text-base tracking-[0.20px] leading-6">
                Pro
              </span>
            </Badge>

            <button className="p-0.5 rounded-lg">
              <img className="w-4 h-4" alt="Component" src="/component-1.svg" />
            </button>

            <img
              className="w-40 h-12"
              alt="Button group profile"
              src="/button-group---profile.svg"
            />
          </div>
        </header>

        <main className="flex flex-col flex-1 px-6 py-6 bg-[#ffffff] overflow-auto">
          <div className="flex flex-col gap-1 mb-8">
            <h1 className="[font-family:'Inter',Helvetica] font-semibold text-[#1b1d23] text-2xl tracking-[0] leading-[31.9px]">
              Agents
            </h1>
            <p className="[font-family:'Inter',Helvetica] font-medium text-[#3d4350] text-base tracking-[0.30px] leading-[24.0px]">
              Here you can see agents that you build
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-[21px] flex-1">
            <div className="w-[376px] h-[126px] rounded-[18.65px] overflow-hidden bg-[url(/hero-animation.png)] bg-cover bg-center relative">
              <div className="absolute top-0 left-0 w-full h-full" />
            </div>

            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#3d4350] text-2xl text-center tracking-[0.30px] leading-6 whitespace-nowrap">
              No Agents yet..
            </h2>

            <p className="[font-family:'Inter',Helvetica] font-normal text-[#3d4350] text-base text-center tracking-[0.30px] leading-6">
              Build your first AI agents to answering <br />
              customer question, book meetings, and more.
            </p>

            <Button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#316afe] rounded-[10px] border border-solid shadow-[inset_0px_2px_8px_#ffffff8f,inset_-2px_-2px_12px_#ffffff8f] h-auto">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ffffff] text-sm tracking-[0.30px] leading-5 whitespace-nowrap">
                Create new agent
              </span>
              <img className="w-5 h-5" alt="U plus" src="/u-plus.svg" />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};
