// hello.cc
#include <node.h>
#include <string>
#include <iostream>

using namespace std;

namespace addon
{

    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Number;
    using v8::Object;
    using v8::String;
    using v8::Value;

    static std::string stringFilename;
    static std::string stringFilename2;

    void Method(const FunctionCallbackInfo<Value> &args)
    {

        auto result = "Bitch hoe";
        Isolate *isolate = args.GetIsolate();
        char *charFileName = new char[8192];
        v8::Local<v8::String> filename;
        filename = args[0].As<v8::String>();
        (*filename)->WriteUtf8(isolate, charFileName);
        stringFilename.assign(charFileName);
        v8::Local<v8::String> filename2;
        filename2 = args[1].As<v8::String>();
        (*filename2)->WriteUtf8(isolate, charFileName);
        stringFilename2.assign(charFileName);
        const char *c = stringFilename.c_str();
        const char *c2 = stringFilename2.c_str();

        // Compare the strings (Fire, Grass, Water)

        if (stringFilename == stringFilename2)
        {
            result = "It's a tie";
        }

        if (stringFilename == "Fire" && stringFilename2 == "Grass")
        {
            result = "Fire ns";
        }
        else if (stringFilename == "Fire" && stringFilename2 == "Water")
        {
            result = "Water Wins!";
        }
        else if (stringFilename == "Grass" && stringFilename2 == "Water")
        {
            result = "Grass Wins!";
        }

        args.GetReturnValue()
            .Set(String::NewFromUtf8(
                     isolate, result)
                     .ToLocalChecked());
    }

    void Initialize(Local<Object> exports)
    {
        NODE_SET_METHOD(exports, "calc", Method);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

} // namespace demo