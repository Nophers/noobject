import react from "react";

function errorhandler(this: string[]) {
  return __awaiter(this, void 0, void 0, function* () {
    return yield Promise.reject(new Error("error"));
  });
}

function __awaiter(
  arg0: any,
  arg1: undefined,
  arg2: undefined,
  arg3: () => Generator<Promise<never>, any, unknown>
) {
  throw new Error("Function not implemented.");
}

function throwerror(args: string[]): Promise<string> {
  {
    throw new Error("error");
  }
}
